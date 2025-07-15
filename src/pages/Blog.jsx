import React from 'react';
import Crumbs from '../components/Crumbs';
import list from '../db.json'
import BlogCard from '../components/blogCard';

const Blog = () => {
    return (
        <>
            <section className='bg-[url("./public/about.jpg")] min-h-[250px] bg-center bg-cover grid place-items-center'>
                <Crumbs />
            </section>
            <section className=''>
                <div className="container mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 my-12">
                      {list.blog.map(item => (
                        <BlogCard {...item} />
                    ))}
                  </div>
                </div>
            </section>
        </>
    );
}

export default Blog;



