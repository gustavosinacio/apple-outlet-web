import { PDFViewer as ReactPDFViewer } from "@react-pdf/renderer";
import PDFRenderer from "components/PDFRenderer/PDFRenderer";

export function PDFViewer({ amountLeft, upfront, total }: PDFViewerProps) {
  return (
    <ReactPDFViewer style={{ width: "100%", height: "100vh" }}>
      <PDFRenderer amountLeft={amountLeft} upfront={upfront} total={total} />
    </ReactPDFViewer>
  );
}
