import { useState, useEffect } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useNavigate } from "react-router-dom";
import { useScan } from "../../services/ScannerContext/ScanContext";

const Scan = () => {
  const [videoDevice, setVideoDevice] = useState<MediaDeviceInfo | undefined>(undefined);
  const { setLastScan } = useScan();
  const navigate = useNavigate();

  useEffect(() => {
    const reader = new BrowserMultiFormatReader();

    async function init() {
      try {
        const videoDevices = await reader.listVideoInputDevices();
        if (videoDevices.length > 0) {
            console.log(videoDevices);
            if (videoDevices[1]) {
                setVideoDevice(videoDevices[1]);
            } else {
                setVideoDevice(videoDevices[0]);
            }
        } else {
          console.error("No camera devices found");
        }
      } catch (err) {
        console.error(err);
      }
    }

    init();
  }, []);

  useEffect(() => {
    if (!videoDevice) return;

    const reader = new BrowserMultiFormatReader();
    reader.decodeFromVideoDevice(videoDevice.deviceId, "video", (result, err) => {
      if (result) {
        const code = result.getText();
        setLastScan(code);
        reader.reset(); // stop reading
        navigate("/"); // back to dashboard
      } else {
        console.error(err);
      }
      // ignore NotFoundException errors
    });

    return () => {
      reader.reset();
    };
  }, [videoDevice, navigate, setLastScan]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <h2 className="text-white text-lg mb-3">Scanning...</h2>
      <video id="video" className="w-full h-full object-contain" />
    </div>
  );
};

export default Scan;
