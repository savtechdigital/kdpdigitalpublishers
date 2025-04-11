// LiveChatContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context for LiveChat
const LiveChatContext = createContext();

// Custom hook to initialize LiveChat and provide toggle functionality
const useLiveChat = () => {
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  useEffect(() => {
    // Initialize LiveChat configuration
    window.__lc = window.__lc || {};
    window.__lc.license = 18940913;
    window.__lc.integration_name = "manual_onboarding";
    window.__lc.product_name = "livechat";

    // LiveChat widget setup
    const lc = (function (n, t, c) {
      function i(n) {
        return e._h ? e._h.apply(null, n) : e._q.push(n);
      }
      const e = {
        _q: [],
        _h: null,
        _v: "2.0",
        on: function () {
          i(["on", c.call(arguments)]);
        },
        once: function () {
          i(["once", c.call(arguments)]);
        },
        off: function () {
          i(["off", c.call(arguments)]);
        },
        get: function () {
          if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load.");
          return i(["get", c.call(arguments)]);
        },
        call: function () {
          i(["call", c.call(arguments)]);
        },
        init: function () {
          const n = t.createElement("script");
          n.async = true;
          n.type = "text/javascript";
          n.src = "https://cdn.livechatinc.com/tracking.js";
          t.head.appendChild(n);
        },
      };
      if (!n.__lc.asyncInit) {
        e.init();
      }
      n.LiveChatWidget = n.LiveChatWidget || e;
      return e;
    })(window, document, [].slice);

    // Cleanup: Remove the script when the app unmounts
    return () => {
      const script = document.querySelector('script[src="https://cdn.livechatinc.com/tracking.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []); // Run only once on mount

  // Function to toggle the LiveChat widget
  const toggleLiveChat = () => {
    if (window.LiveChatWidget) {
      if (isLiveChatOpen) {
        window.LiveChatWidget.call('minimize'); // Hides the chat widget
      } else {
        window.LiveChatWidget.call('maximize'); // Opens the chat widget
      }
      setIsLiveChatOpen(!isLiveChatOpen);
    } else {
      console.error("LiveChatWidget is not loaded yet.");
    }
  };

  return { toggleLiveChat, isLiveChatOpen };
};

// Context Provider component
 export const LiveChatProvider = ({ children }) => {
  const liveChat = useLiveChat();

  return (
    <LiveChatContext.Provider value={liveChat}>
      {children}
      {/* Fallback for users with JavaScript disabled */}
      <noscript>
        <a href="https://www.livechat.com/chat-with/18940913/" rel="nofollow">
          Chat with us
        </a>
        , powered by{' '}
        <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">
          LiveChat
        </a>
      </noscript>
    </LiveChatContext.Provider>
  );
};

// Custom hook to access the LiveChat context
export const useLiveChatContext = () => {
  const context = useContext(LiveChatContext);
  if (!context) {
    throw new Error('useLiveChatContext must be used within a LiveChatProvider');
  }
  return context;
};