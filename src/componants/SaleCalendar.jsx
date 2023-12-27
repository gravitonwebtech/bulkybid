import React from "react";

export default function SaleCalendar() {
  const auctionData = [
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "TAMIL NADU",
      saleDate: "27-12-2023",
      details: "Detail1"
    },

    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "ANDHRA PRADESH",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "CHHATTISGARH",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "DELHI",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "GOA",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "GUJARAT",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "HARYANA",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "KARNATAKA",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    {
      category: "ET-Slv",
      eventType: "QUOTE EVENT",
      sellerName: "INSURANCE SALVAGE",
      location: "KERALA",
      saleDate: "27-12-2023",
      details: "Detail1"
    },
    

  ];
  return (
    <>
      <div className="overflow-x-auto">
        <div className="mx-0 md:mx-20 lg:mx-28 xl:mx-40 mt-24 md:mt-32">
          <table className="min-w-full bg-white rounded border-2 shadow mt-5">
            <thead>

              <tr className="bg-gray-100 text-gray-700 text-left">
                <th className="py-3 px-4 font-semibold">CATEGORY</th>
                <th className="py-3 px-4 font-semibold">EVENT TYPE</th>
                <th className="py-3 px-4 font-semibold">SELLER NAME</th>
                <th className="py-3 px-4 font-semibold">LOCATION</th>
                <th className="py-3 px-4 font-semibold">SALE DATE</th>
                <th className="py-3 px-4 font-semibold">DETAILS</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {auctionData.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4">{item.eventType}</td>
                  <td className="py-3 px-4">{item.sellerName}</td>
                  <td className="py-3 px-4">{item.location}</td>
                  <td className="py-3 px-4">{item.saleDate}</td>
                  <td className="py-3 px-4">{item.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
