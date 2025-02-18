import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface StockLogsProps {
  isOpen: boolean;
  customClass?: string;
  onClose: () => void;
}

const StockLogs: React.FC<StockLogsProps> = ({
  customClass,
  isOpen,
  onClose,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  const handleBackgroundClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const tableColumnClass = "border border-gray-300 text-nowrap p-3 px-4";
  const dataText = "text-gray-600";
  const idText = "text-gray-600 italic font-semibold";
  const numberText = "text-black font-semibold";
  const statusTrue = "text-green-500";
  const statusFalse = "text-red-500";

  return (
    <div
      className={`fixed inset-0 bg-gray-800 backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-[100]`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`animate-slideUp bg-white p-8 md:p-12 py-8 rounded-lg shadow-lg relative min-w-96 ${customClass}`}
      >
        <div className="w-full flex items-center justify-between mb-4">
          <p className="text-2xl font-bold">Stock Logs</p>

          {/* Close button */}
          <button
            className="text-lg bg-gray-100 hover:bg-gray-200 text-gray-800 p-1 rounded-full transition-all"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        {/* Popup content */}
        <div className="overflow-x-auto overflow-y-auto h-full custom-scrollbar">
          <table className="w-full rounded-md border border-gray-300">
            <thead className="sticky top-0 bg-gray-100 ">
              <tr className="bg-[#FFE6BC] border border-gray-300">
                <th className={tableColumnClass}>User</th>
                <th className={tableColumnClass}>ID</th>
                <th className={tableColumnClass}>stockID</th>
                <th className={tableColumnClass}>Number</th>
                <th className={tableColumnClass}>MakerID</th>
                <th className={tableColumnClass}>Model</th>
                <th className={tableColumnClass}>ModelGrade</th>
                <th className={tableColumnClass}>CC</th>
                <th className={tableColumnClass}>EngineTypeID</th>
                <th className={tableColumnClass}>Year</th>
                <th className={tableColumnClass}>Month</th>
                <th className={tableColumnClass}>Date</th>
                <th className={tableColumnClass}>Chassis</th>
                <th className={tableColumnClass}>ChassisNo</th>
                <th className={tableColumnClass}>Km</th>
                <th className={tableColumnClass}>KmSymbol</th>
                <th className={tableColumnClass}>Color</th>
                <th className={tableColumnClass}>IntColor</th>
                <th className={tableColumnClass}>GearID</th>
                <th className={tableColumnClass}>StatusID</th>
                <th className={tableColumnClass}>AucGrade</th>
                <th className={tableColumnClass}>Price</th>
                <th className={tableColumnClass}>Leather</th>
                <th className={tableColumnClass}>Comment</th>
                <th className={tableColumnClass}>OnList</th>
                <th className={tableColumnClass}>AmEquipment</th>
                <th className={tableColumnClass}>FOB</th>
                <th className={tableColumnClass}>Transit</th>
                <th className={tableColumnClass}>InvoiceNo</th>
                <th className={tableColumnClass}>PriceUKP</th>
                <th className={tableColumnClass}>Bought</th>
                <th className={tableColumnClass}>Sold</th>
                <th className={tableColumnClass}>Supplier</th>
                <th className={tableColumnClass}>AuctionVehicleID</th>
                <th className={tableColumnClass}>AuctionName</th>
                <th className={tableColumnClass}>AuctionNo</th>
                <th className={tableColumnClass}>AuctionDate</th>
                <th className={tableColumnClass}>AuctionLotNo</th>
                <th className={tableColumnClass}>PurchasePrice</th>
                <th className={tableColumnClass}>PurchasePriceVat</th>
                <th className={tableColumnClass}>AuctionFee</th>
                <th className={tableColumnClass}>AuctionFeeVat</th>
                <th className={tableColumnClass}>RecycleFee</th>
                <th className={tableColumnClass}>RecycleFeeAppliedDate</th>
                <th className={tableColumnClass}>RecycleFeeReceived</th>
                <th className={tableColumnClass}>RecycleFeeReceivedDate</th>
                <th className={tableColumnClass}>RecycleFeeComment</th>
                <th className={tableColumnClass}>VehicleTax</th>
                <th className={tableColumnClass}>VehicleTaxReceived</th>
                <th className={tableColumnClass}>VehicleTaxReceivedDate</th>
                <th className={tableColumnClass}>VehicleTaxComment</th>
                <th className={tableColumnClass}>InlandTransportCost</th>
                <th className={tableColumnClass}>FaxCopy</th>
                <th className={tableColumnClass}>VehicleLength</th>
                <th className={tableColumnClass}>VehicleWidth</th>
                <th className={tableColumnClass}>VehicleHeight</th>
                <th className={tableColumnClass}>VehicleHeightChanged</th>
                <th className={tableColumnClass}>VehicleWeight</th>
                <th className={tableColumnClass}>ReceivedPaperwork</th>
                <th className={tableColumnClass}>ReceivedPaperworkDate</th>
                <th className={tableColumnClass}>ReceivedAccessories</th>
                <th className={tableColumnClass}>ReceivedAccessoriesDate</th>
                <th className={tableColumnClass}>ReregistrationDate</th>
                <th className={tableColumnClass}>ChangedPaperwork</th>
                <th className={tableColumnClass}>AdministrationComment</th>
                <th className={tableColumnClass}>Yard</th>
                <th className={tableColumnClass}>PaymentAmount</th>
                <th className={tableColumnClass}>Commission</th>
                <th className={tableColumnClass}>Other1Text</th>
                <th className={tableColumnClass}>Other1Amount</th>
                <th className={tableColumnClass}>Other2Text</th>
                <th className={tableColumnClass}>Other2Amount</th>
                <th className={tableColumnClass}>Other3Text</th>
                <th className={tableColumnClass}>Other3Amount</th>
                <th className={tableColumnClass}>Other4Text</th>
                <th className={tableColumnClass}>Other4Amount</th>
                <th className={tableColumnClass}>SalesPrice</th>
                <th className={tableColumnClass}>KmInMiles</th>
                <th className={tableColumnClass}>ManufactureYear</th>
                <th className={tableColumnClass}>ManufactureMonth</th>
                <th className={tableColumnClass}>PriceCurrency</th>
                <th className={tableColumnClass}>LocationID</th>
                <th className={tableColumnClass}>IsWholesale</th>
                <th className={tableColumnClass}>ExtraCosts</th>
                <th className={tableColumnClass}>ExtraCostsText</th>
                <th className={tableColumnClass}>Transporter</th>
                <th className={tableColumnClass}>TransporterRegDate</th>
                <th className={tableColumnClass}>Yardcost</th>
                <th className={tableColumnClass}>Shippingcost</th>
                <th className={tableColumnClass}>ShippingcostOther</th>
                <th className={tableColumnClass}>PlannedExportDate</th>
                <th className={tableColumnClass}>JibaiReceived</th>
                <th className={tableColumnClass}>JibaiAppliedDate</th>
                <th className={tableColumnClass}>JibaiReceivedDate</th>
                <th className={tableColumnClass}>JibaiComment</th>
                <th className={tableColumnClass}>TcvUpload</th>
                <th className={tableColumnClass}>TcvUploaded</th>
                <th className={tableColumnClass}>IsAccidentFlagged</th>
                <th className={tableColumnClass}>TcvMileageOption</th>
                <th className={tableColumnClass}>TcvExteriorColorID</th>
                <th className={tableColumnClass}>TcvInteriorColorID</th>
                <th className={tableColumnClass}>Doors</th>
                <th className={tableColumnClass}>TcvBodyStyleID1</th>
                <th className={tableColumnClass}>TcvBodyStyleID2</th>
                <th className={tableColumnClass}>DriveTypeID</th>
                <th className={tableColumnClass}>Passengers</th>
                <th className={tableColumnClass}>TcvSteeringID</th>
                <th className={tableColumnClass}>TcvModelID</th>
                <th className={tableColumnClass}>PaperworkSentDate</th>
                <th className={tableColumnClass}>InnerCargoComment</th>
                <th className={tableColumnClass}>ETY</th>
                <th className={tableColumnClass}>PriceMMY</th>
                <th className={tableColumnClass}>PriceJPY</th>
                <th className={tableColumnClass}>Sold2</th>
                <th className={tableColumnClass}>CjpCheck</th>
                <th className={tableColumnClass}>ShippingBookedDate</th>
                <th className={tableColumnClass}>ShippingInvoiceDate</th>
                <th className={tableColumnClass}>ShippingECDate</th>
                <th className={tableColumnClass}>ShippingTask1ID</th>
                <th className={tableColumnClass}>ShippingTask1Date</th>
                <th className={tableColumnClass}>ShippingTask2ID</th>
                <th className={tableColumnClass}>ShippingTask2Date</th>
                <th className={tableColumnClass}>ShippingTask3ID</th>
                <th className={tableColumnClass}>ShippingTask3Date</th>
                <th className={tableColumnClass}>ShippingTask4ID</th>
                <th className={tableColumnClass}>ShippingTask4Date</th>
                <th className={tableColumnClass}>ShippingSO</th>
                <th className={tableColumnClass}>NovaID</th>
                <th className={tableColumnClass}>IsYayoi</th>
                <th className={tableColumnClass}>NumberPlateDate</th>
                <th className={tableColumnClass}>RecycleFeeNumber</th>
                <th className={tableColumnClass}>ArrivedToYard</th>
                <th className={tableColumnClass}>CustomerInvoiceSent</th>
                <th className={tableColumnClass}>InnerCargoTaskID</th>
                <th className={tableColumnClass}>InnerCargoTaskDate</th>
                <th className={tableColumnClass}>HasRoofRack</th>
                <th className={tableColumnClass}>RoofRackTaskID</th>
                <th className={tableColumnClass}>RoofRackTaskDate</th>
                <th className={tableColumnClass}>YardCheckTaskID</th>
                <th className={tableColumnClass}>YardCheckTaskDate</th>
                <th className={tableColumnClass}>YardTask1ID</th>
                <th className={tableColumnClass}>YardTask1Date</th>
                <th className={tableColumnClass}>YardTask2ID</th>
                <th className={tableColumnClass}>YardTask2Date</th>
                <th className={tableColumnClass}>YardComment</th>
                <th className={tableColumnClass}>ShippingComment</th>
                <th className={tableColumnClass}>ExportCertificateURL</th>
                <th className={tableColumnClass}>EstimatorGroup</th>
                <th className={tableColumnClass}>PriceIsNegotiated</th>
                <th className={tableColumnClass}>PriceIsAgreed</th>
                <th className={tableColumnClass}>SupplierPayedAt</th>
                <th className={tableColumnClass}>RequestShipping</th>
                <th className={tableColumnClass}>ShippingRequestTaskID</th>
                <th className={tableColumnClass}>ShippingRequestTaskDate</th>
                <th className={tableColumnClass}>IsInnerCargoPublished</th>
                <th className={tableColumnClass}>PaymentComment</th>
                <th className={tableColumnClass}>RegKm</th>
                <th className={tableColumnClass}>ParcelSendTaskID</th>
                <th className={tableColumnClass}>ClaimTaskID</th>
                <th className={tableColumnClass}>ClaimTaskDate</th>
                <th className={tableColumnClass}>TaxConfirmedDate</th>
                <th className={tableColumnClass}>SalesComment</th>
                <th className={tableColumnClass}>VehicleTypeID</th>
                <th className={tableColumnClass}>ImagesOkDate</th>
                <th className={tableColumnClass}>ImagesExtrasOkDate</th>
                <th className={tableColumnClass}>YardImageTaskID</th>
                <th className={tableColumnClass}>YardImageTaskDate</th>
                <th className={tableColumnClass}>StockSupplierYardID</th>
                <th className={tableColumnClass}>Modified</th>
                <th className={tableColumnClass}>TourID</th>
                <th className={tableColumnClass}>DeparturePortID</th>
                <th className={tableColumnClass}>ArrivalPortID</th>
                <th className={tableColumnClass}>DetailStatus</th>
                <th className={tableColumnClass}>IsBlocked</th>
                <th className={tableColumnClass}>ModifiedAt</th>
                <th className={tableColumnClass}>CreatedAt</th>
                <th className={tableColumnClass}>CreatedBy</th>
                <th className={tableColumnClass}>PaymentStatus</th>
                <th className={tableColumnClass}>LocalETY</th>
                <th className={tableColumnClass}>SalesDealId</th>
                <th className={tableColumnClass}>LocalYardOut</th>
                <th className={tableColumnClass}>LedgerCustomerId</th>
                <th className={tableColumnClass}>InvoiceXRateId</th>
                <th className={tableColumnClass}>IncludeXRateInExport</th>
                <th className={tableColumnClass}>IsRegkmNotApplicable</th>
                <th className={tableColumnClass}>IsFCConfirmed</th>
                <th className={tableColumnClass}>SpecStatusID</th>
                <th className={tableColumnClass}>ShouldNotifyOnImageUpdate</th>
                <th className={tableColumnClass}>LookupChassisModel</th>
                <th className={tableColumnClass}>Translation</th>
                <th className={tableColumnClass}>ShowAuctionImages</th>
                <th className={tableColumnClass}>ShowYardImages</th>
                <th className={tableColumnClass}>ShowShitamiImages</th>
                <th className={tableColumnClass}>ConsigneeId</th>
                <th className={tableColumnClass}>IsExpensive</th>
                <th className={tableColumnClass}>IsExpensiveForParcels</th>
                <th className={tableColumnClass}>IsSoldToCosmoUk</th>
                <th className={tableColumnClass}>Plate</th>
                <th className={tableColumnClass}>VehicleTaxVat</th>
                <th className={tableColumnClass}>VehicleTaxVatRefund</th>
                <th className={tableColumnClass}>VehicleTaxDeposit</th>
                <th className={tableColumnClass}>VehicleTaxDepositRefund</th>
                <th className={tableColumnClass}>FuelTypeID</th>
                <th className={tableColumnClass}>Modified By</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(30)].map((_, index) => (
                <tr key={index}>
                  <td className={tableColumnClass}>John Doe</td>
                  <td className={`${tableColumnClass} ${idText}`}>12345</td>
                  <td className={`${tableColumnClass} ${dataText}`}>STK123</td>
                  <td className={`${tableColumnClass} ${numberText}`}>10</td>
                  <td className={`${tableColumnClass} ${dataText}`}>MK123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Model X</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Grade A</td>
                  <td className={`${tableColumnClass} ${dataText}`}>2000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>ET123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>2023</td>
                  <td className={`${tableColumnClass} ${dataText}`}>January</td>
                  <td className={`${tableColumnClass} ${dataText}`}>01</td>
                  <td className={`${tableColumnClass} ${dataText}`}>CH123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>CH12345</td>
                  <td className={`${tableColumnClass} ${dataText}`}>10000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Km</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Red</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Black</td>
                  <td className={`${tableColumnClass} ${dataText}`}>G123</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>
                    Active
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>A</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$1000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$500</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>INV123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$1500</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Supplier X
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>AV123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Auction X
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>A123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Lot123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$2000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$200</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$100</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$10</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$50</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>$300</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>$400</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yard X</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$5000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$300</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Other1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$100</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Other2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$200</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Other3</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$300</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Other4</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$400</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$6000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>6200</td>
                  <td className={`${tableColumnClass} ${dataText}`}>2022</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    December
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>USD</td>
                  <td className={`${tableColumnClass} ${dataText}`}>LOC123</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$100</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Extra costs
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Transporter X
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>$200</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$300</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$400</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Option 1
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Color1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Color2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>4</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Style1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Style2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Drive1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>5</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Steering1
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Model1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>ETY1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$7000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>¥800000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Checked</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task3</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task4</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>SO123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>NOVA123</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>RF123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task3</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task4</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>URL123</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Group1</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>10000</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task3</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    No comments
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Type1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Task4</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Supplier1
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Port1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Port2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Status1</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>User1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Paid</td>
                  <td className={`${tableColumnClass} ${dataText}`}>ETY2</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Deal1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    2023-01-01
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Customer1
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>Rate1</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Spec1</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Chassis1
                  </td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Translation1
                  </td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${dataText}`}>
                    Consignee1
                  </td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${statusTrue}`}>Yes</td>
                  <td className={`${tableColumnClass} ${statusFalse}`}>No</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Plate1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$100</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$50</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$200</td>
                  <td className={`${tableColumnClass} ${dataText}`}>$100</td>
                  <td className={`${tableColumnClass} ${dataText}`}>Fuel1</td>
                  <td className={`${tableColumnClass} ${dataText}`}>User2</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockLogs;
