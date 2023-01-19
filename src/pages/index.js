import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"


// Step 2: Define your component
const IndexPage = () => {
return (
<Layout PageHeading='Домашняя' PageTitle='Ремонт стиральных машин'>
    Добро пожаловать на нашу главную страницу
    <StaticImage src="../images/master.jpg" alt="мастер ремонтирует холодильник" />
     <StaticImage src="../images/refrigeratorrepair.webp" alt="мастер ремонтирует холодильник" />
</Layout>

)
}


// Step 3: Export your component
export default IndexPage

