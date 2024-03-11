import { Flex } from "@radix-ui/themes";
import MainViewer from "./components/mainviewer";
import Thumbnails from "./components/thumbnails";
import "@radix-ui/themes/styles.css";
import { useEffect, useState } from "react";
const imageList: string[] = [
  "https://source.unsplash.com/pFqrYbhIAXs/800x800",
  "https://source.unsplash.com/pV5ckb2HEVk/800x800",
  "https://source.unsplash.com/WbuIaa8V1Ms/800x800",
  "https://source.unsplash.com/0z8qJox8ZNE/800x800",
  "https://source.unsplash.com/xQhP7RVgA3c/800x800",
  "https://source.unsplash.com/wcgHkbIMFTE/800x800",
  "https://source.unsplash.com/pFqrYbhIAXs/800x800",
  "https://source.unsplash.com/pV5ckb2HEVk/800x800",
  "https://source.unsplash.com/WbuIaa8V1Ms/800x800",
  "https://source.unsplash.com/0z8qJox8ZNE/800x800",
  "https://source.unsplash.com/xQhP7RVgA3c/800x800",
  "https://source.unsplash.com/wcgHkbIMFTE/800x800",
  "https://source.unsplash.com/pV5ckb2HEVk/800x800",
  "https://source.unsplash.com/WbuIaa8V1Ms/800x800",
  "https://source.unsplash.com/0z8qJox8ZNE/800x800",
  "https://source.unsplash.com/xQhP7RVgA3c/800x800",
  "https://source.unsplash.com/wcgHkbIMFTE/800x800",
  "https://source.unsplash.com/pV5ckb2HEVk/800x800",
  "https://source.unsplash.com/WbuIaa8V1Ms/800x800",
  "https://source.unsplash.com/0z8qJox8ZNE/800x800",
  "https://source.unsplash.com/xQhP7RVgA3c/800x800",
  "https://source.unsplash.com/wcgHkbIMFTE/800x800",
];
const Layout = (props: any) => {
  const [images, setImages] = useState(imageList);
  const [opasity, setOpasity] = useState(0);
  const [imgsrc, setImg] = useState(
    "https://source.unsplash.com/ufFIweqSPd4/800x800",
  );
  useEffect(() => {
    setImages(imageList);
    setOpasity(1);
  }, []);
  return (
    <Flex
      className="App"
      direction="column"
      style={{ opacity: opasity, transition: "opacity 2.5s" }}
    >
      <MainViewer img={imgsrc} />
      <Thumbnails images={images} setImg={setImg} />
    </Flex>
  );
};
export default Layout;
