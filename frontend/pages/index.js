import Image from "next/image";
//import styles from "./page.module.css";
import { Box, Container } from "@mui/material";
import SearchBar from "../components/Search/SearchBar";
import PictureHome from '../public/assets/image_home2.png';
import CardHome from "../components/Home/CardHome";

const contents = [
  {
    id:1,
    title:"Qui sommes-nous?",
    subtitle: "Ecoride, le covoiturage éco-responsable",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh lorem, sodales nec lectus eu, tincidunt varius ex. In sit amet volutpat lacus. Proin magna ex, lobortis id lorem sit amet, viverra suscipit erat. Mauris eget fringilla est. Donec accumsan erat vitae sodales facilisis. Etiam aliquam purus tellus. Pellentesque mollis arcu id lorem aliquet, quis consequat augue luctus. Cras facilisis consequat nisi, vitae hendrerit nunc malesuada non. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius, orci vel placerat vestibulum, magna libero mattis nulla, id pretium nunc nisl vitae mi. Fusce ante est, elementum ut pulvinar pretium, hendrerit quis neque. Aenean sit amet mauris tincidunt, porttitor leo sed, sollicitudin sapien. Fusce non nisi nisl. Etiam non lectus in augue varius pulvinar quis in purus. ",
    pathPicture:"/assets/mountains.jpg"
  },
  {
    id:2,
    title:"Nos Valeurs?",
    subtitle: "L'écologie notre préoccupation, le covoiturage notre responsabilité,",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh lorem, sodales nec lectus eu, tincidunt varius ex. In sit amet volutpat lacus. Proin magna ex, lobortis id lorem sit amet, viverra suscipit erat. Mauris eget fringilla est. Donec accumsan erat vitae sodales facilisis. Etiam aliquam purus tellus. Pellentesque mollis arcu id lorem aliquet, quis consequat augue luctus. Cras facilisis consequat nisi, vitae hendrerit nunc malesuada non. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas varius, orci vel placerat vestibulum, magna libero mattis nulla, id pretium nunc nisl vitae mi. Fusce ante est, elementum ut pulvinar pretium, hendrerit quis neque. Aenean sit amet mauris tincidunt, porttitor leo sed, sollicitudin sapien. Fusce non nisi nisl. Etiam non lectus in augue varius pulvinar quis in purus. ",
    pathPicture:"/assets/nature.jpg"
  },
]


export default function Home() {
  return (
     <Box >
        <Image
          src={PictureHome}
          alt="photo road forest"
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <Container maxWidth="lg">
          <SearchBar/>
          {/** list content for homepage and for each content create a Card with <CardPicture/> and transmitting props */}   
          { contents.map((content)=>{       
            return(
             <CardHome key={content.id} content={content}/>
            )           
          })}
        </Container>
        </Box>
  );
}
