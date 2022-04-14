import React from 'react';
import './styles.scss';
import {StaticImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
const BLOGS=[
    {
        compiledFeaturedImage:<StaticImage width={263} placeholder="blurred" src={'../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Amar Jakhar",
        description:"I am very happy and satisfied with the service freshtables provided. Now I dont have to worry about where to sell my crops.",
        publishedAt:"March 23, 2022",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage width={263} placeholder="blurred" src={'../../images/blogs/2.png'} alt={"Blog Image"}/>,
        title:"Mannu Kumar",
        description:"Freshtables provide best price and service. I am very satisfied with them! I get fresh veggies directly from farms!",
        publishedAt:"Apr 11, 2022",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage width={263} placeholder="blurred" src={'../../images/blogs/3.png'} alt={"Blog Image"}/>,
        title:"Sunil Singh",
        description:"Freshtables has changed the business experience for me! Now its much easier and effective to get vegetables directly from farmers!",
        publishedAt:"March 29, 2020",
        slug:"blogg"
    },{
        compiledFeaturedImage:<StaticImage width={263} placeholder="blurred" src={'../../images/blogs/1.png'} alt={"Blog Image"}/>,
        title:"Blog Tittle",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan venenatis lectus et bibendum. In vestibulum erat a finibus auctor",
        publishedAt:"May 23, 2020",
        slug:"blogg"
    }
]
export default function BlogsContainer(){
    return <div className="blogs">
        <div className="heading">Read Our Latest Reviews</div>
        <div className="elements">
            {BLOGS.slice(0,3).map(blog=><div className="element">
                    <div className="image">
                        {blog.compiledFeaturedImage}
                    </div>
                    <div className="title">
                        {blog.title}
                    </div>
                    <div className="desc">
                        {blog.description}
                    </div>
                    {/*<div className="bottom">*/}
                    {/*    <div className="date">*/}
                    {/*        {blog.publishedAt}*/}
                    {/*    </div>*/}
                    {/*    <Link to={"/blog/"+blog.slug}>*/}
                    {/*        <div className="read">*/}
                    {/*            <StaticImage placeholder="blurred" placeholder="blurred" src="../../images/arrow.png" alt="read more"/>*/}
                    {/*        </div>*/}
                    {/*    </Link>*/}

                    {/*</div>*/}
                </div>)}

        </div>
    </div>
}
