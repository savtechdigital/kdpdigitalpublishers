import React from "react";
import applepay from "../../assets/images/pay/1.png";
import bancontact from "../../assets/images/pay/2.png";
import card from "../../assets/images/pay/3.png";
import eps from "../../assets/images/pay/4.png";
import giropay from "../../assets/images/pay/5.png";
import googlepay from "../../assets/images/pay/6.png";
import ideal from "../../assets/images/pay/7.png";
import klarna from "../../assets/images/pay/8.png";
import link from "../../assets/images/pay/9.png";
import sepa from "../../assets/images/pay/10.png";
import stripe from "../../assets/images/pay/11.png";
import transfer from "../../assets/images/pay/13.png";
import trustpilot from "../../assets/images/review/trustpilot.png";
import reviews from "../../assets/images/review/reviews.png";
import goodfirms from "../../assets/images/review/goodfirms.png";

//////////////////////////////////////////////////////////////////////
const Payment = () => {
  //////////////////////////////////////////////////////////////////////

  const paymentMethods = [
    { id: 1, image: applepay, alt: "Apple Pay" },
    { id: 2, image: stripe, alt: "Stripe" },
    { id: 3, image: googlepay, alt: "Google Pay" },
    { id: 4, image: link, alt: "Link" },
    { id: 5, image: bancontact, alt: "Bancontact" },
    { id: 6, image: eps, alt: "EPS" },
    { id: 7, image: giropay, alt: "Giropay" },
    { id: 8, image: ideal, alt: "iDEAL" },
    { id: 9, image: transfer, alt: "Transfer" },
    { id: 10, image: klarna, alt: "Klarna" },
    { id: 11, image: card, alt: "Card" },
    { id: 12, image: sepa, alt: "SEPA" },
  ];
  //////////////////////////////////////////////////////////////////////

  return (
    <div className="container mx-auto px-20  w-[90%] py-10 mb-10 bg-gray-100 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Payment Methods Section */}
        <div className="">
          <h2 className="text-3xl font-bold mb-8">Payment Methods</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="p-2 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={method.image}
                  alt={method.alt}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold mb-8">Reviews</h2>
          <div className="flex items-center gap-4">
            <img src={reviews} alt="reviews" className="h-12 w-auto" />
            <img src={goodfirms} alt="goodfirms" className="h-12 w-auto" />
          </div>
          <div className="mt-4">
            <button className="border border-[#00b67a] text-[#00b67a] px-4 py-2 rounded-md flex items-center gap-2 transition-colors ">
              Review us on
              <img
                src={trustpilot}
                alt="Trustpilot"
                className="h-5 w-auto hover:scale-150 transition-all duration-300"
              />
              Trustpilot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
