import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const ItemContext = createContext();

// const dummyPaintings = [
//   {
//     id: v4(),
//     title: "Poor & Rich",
//     price: 1500,
//     size: "36x48 inch",
//     image: "/image1.jpg",
//     rimage: "/rimage1.jpg",
//     desc: "This painting visually explores the contrasting lives of children from rich and poor backgrounds, using vibrant, symbolic elements to highlight inequality and hope. At first glance, it depicts children together—playing, interacting, or dreaming—with a central motif (such as a folded Indian currency note, toys, and sweets) that unites the scene. Yet, subtle distinctions in clothing, posture, and the objects surrounding each group introduce the socio-economic divide: while some children appear carefree, others are marked by expressions of longing or resilience. The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity. By weaving playful and poignant imagery, the painting prompts viewers to reflect on childhood aspirations and the lasting impact of economic disparity, urging empathy and awareness.",
//     type: "acrylic",
//   },
//   {
//     id: v4(),
//     title: "Floating Dreams",
//     price: 1200,
//     size: "24x36 inch",
//     image: "/image2.jpg",
//     rimage: "/rimage2.jpg",
//     desc: " At first glance, it depicts children together—playing, interacting, or dreaming—with a central motif (such as a folded Indian currency note, toys, and sweets) that unites the scene. Yet, subtle distinctions in clothing, posture, and the objects surrounding each group introduce the socio-economic divide: while some children appear carefree, others are marked by expressions of longing or resilience. The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity.",
//     type: "acrylic",
//   },
//   {
//     id: v4(),
//     title: "Hidden Depth",
//     price: 950,
//     size: "5x6 fit",
//     image: "/image3.jpg",
//     rimage: "/rimage3.jpg",
//     desc: "Fields glowing under sunlight in night  At first glance, it depicts children together—playing, interacting, or dreaming—with a central motif (such as a folded Indian currency note, toys, and sweets) that unites the scene. Yet, subtle distinctions in clothing, posture, and the objects surrounding each group introduce the socio-economic divide: while some children appear carefree, others are marked by expressions of longing or resilience. The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity. ",
//     type: "stillLife",
//   },

//   {
//     id: v4(),
//     title: "Evil Gate ",
//     price: 1600,
//     size: "30X36 inch",
//     image: "/image4.jpg",
//     rimage: "/rimage4.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Chakra",
//     price: 1600,
//     size: "18x24 inch",
//     image: "/image5.jpg",
//     rimage: "/rimage5.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Cosmic Splash",
//     price: 1800,
//     size: "30X36 inch",
//     image: "/image6.jpg",
//     rimage: "/rimage6.jpg",
//     desc: " This abstract artwork uses dynamic splashes of vivid color—blacks, blues, pinks, and whites—to evoke the chaotic beauty of a cosmic or galactic event. The random interplay of paint creates the impression of stars, nebulae, and the universe’s mystery, inspiring awe and wonder. The abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility",
//     type: "pastel",
//   },
//   {
//     id: v4(),
//     title: "Indian Metamorphosis",
//     price: 1800,
//     size: "36x48 inch",
//     image: "/image7.jpg",
//     rimage: "/rimage7.jpg",
//     desc: "Making file with my inspiratiion ansd make it. The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity. ",
//     type: "stillLife",
//   },
//   {
//     id: v4(),
//     title: "Dreamy Girl",
//     price: 1800,
//     size: "24x30 inch",
//     image: "/image8.jpg",
//     rimage: "/rimage8.jpg",
//     desc: "The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity.Making file with my inspiratiion ansd make it. ",
//     type: "stillLife",
//   },

//   {
//     id: v4(),
//     title: "Urban Memories",
//     price: 1800,
//     size: "30X36 inch",
//     image: "/image9.jpg",
//     rimage: "/rimage9.jpg",
//     desc: " This abstract artwork uses dynamic splashes of vivid color—blacks, blues, pinks, and whites—to evoke the chaotic beauty of a cosmic or galactic event. The random interplay of paint creates the impression of stars, nebulae, and the universe’s mystery, inspiring awe and wonder. The abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility",
//     type: "gouache",
//   },
//   {
//     id: v4(),
//     title: "Fluttering Cosmos",
//     price: 1800,
//     size: "30X36 inch",
//     image: "/image10.jpg",
//     rimage: "/rimage10.jpg",
//     desc: " This abstract artwork uses dynamic splashes of vivid color—blacks, blues, pinks, and whites—to evoke the chaotic beauty of a cosmic or galactic event. The random interplay of paint creates the impression of stars, nebulae, and the universe’s mystery, inspiring awe and wonder. The abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility",
//     type: "gouache",
//   },
//   {
//     id: v4(),
//     title: "Floating Dreams",
//     price: 1200,
//     size: "24x30 inch",
//     image: "/image11.jpg",
//     rimage: "/rimage11.jpg",
//     desc: "The artwork draws inspiration from the paradoxes described in stories like Lost Spring, where childhood wonder is snatched away by poverty, and generational traditions often overshadow opportunity.he abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility.",
//     type: "acrylic",
//   },
//   {
//     id: v4(),
//     title: "Cat Sketch ",
//     price: 1600,
//     size: "12x12 inch",
//     image: "/image12.jpg",
//     rimage: "/rimage12.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Pop Art ",
//     price: 1600,
//     size: "36X48 inch",
//     image: "/image13.jpg",
//     rimage: "/rimage13.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Factory ",
//     price: 1600,
//     size: "30X36 inch",
//     image: "/image14.jpg",
//     rimage: "/rimage14.jpg",
//     desc: " The abstract nature allows viewers to interpret it as a visual representation of infinite space and possibility.Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Lotus Grace",
//     price: 1600,
//     size: "48x60 inch",
//     image: "/image15.jpg",
//     rimage: "/rimage15.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Landscape",
//   },
//   {
//     id: v4(),
//     title: "Western Lady",
//     price: 1600,
//     size: "24X36 inch",
//     image: "/image16.jpg",
//     rimage: "/rimage16.jpg",
//     desc: " The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity. Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. ",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Entrance",
//     price: 1600,
//     size: "30X36 inch",
//     image: "/image17.jpg",
//     rimage: "/rimage17.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Fresco",
//   },
//   {
//     id: v4(),
//     title: "Fortune's Reflection",
//     price: 1600,
//     size: "30X36 inch",
//     image: "/image18.jpg",
//     rimage: "/rimage18.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Encaustic",
//   },
//   {
//     id: v4(),
//     title: "Elegant Lady ",
//     price: 1600,
//     size: "30X36 inch",
//     image: "/image19.jpg",
//     rimage: "/rimage19.jpg",
//     desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita odio blanditiis deleniti voluptatem, aperiam obcaecati quisquam maiores labore nobis porro eaque tempore sed placeat repudiandae fugiat natus, eum dolor! Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. The artist’s signature in Devanagari script personalizes the work, making it a blend of cultural and artistic identity.",
//     type: "Still Life",
//   },
//   {
//     id: v4(),
//     title: "Indian Bride ",
//     price: 1600,
//     size: "48x60 inch",
//     image: "/image20.jpg",
//     rimage: "/rimage20.jpg",
//     desc: " Rendered in bold ink lines, this elegant monochrome cat portrait emphasizes both realism and expressive mark-making. The detailed texture of fur and the intense gaze celebrate the character and beauty of felines. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci expedita odio blanditiis deleniti voluptatem, aperiam obcaecati quisquam maiores labore nobis porro eaque tempore sed placeat repudiandae fugiat natus, eum dolor!",
//     type: "Encaustic",
//   },
// ];

const ItemProvider = ({ children }) => {
  const [dummyPaintings, setDummyPaintings] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/paintings");
        const data = await res.json();
        setDummyPaintings(data);
      } catch (error) {
        console.error("Error fetching paintings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPaintings();
  }, []);
  console.log(dummyPaintings);

  return (
    <>
      <ItemContext.Provider value={{ dummyPaintings, loading }}>
        {children}
      </ItemContext.Provider>
    </>
  );
};
export { ItemContext, ItemProvider };
