// src/Components/Blog/Blog.js
import React from 'react';
import './Blog.css';
import { FaRegNewspaper } from 'react-icons/fa';
import { Card, Button } from 'react-bootstrap';
import maniImg1 from '../mani assets/mani-img1.jpg';
import maniImg2 from '../mani assets/mani-img2.jpg';

function Blog() {
    const blogPosts = [
        {
            title: 'Understanding React Hooks',
            date: 'September 1, 2024',
            excerpt: 'React Hooks allow you to use state and other React features without writing a class. Learn how to use them effectively in your projects.',
            image: maniImg1
        },
        {
            title: 'Mastering CSS Grid Layout',
            date: 'August 25, 2024',
            excerpt: 'CSS Grid Layout is a powerful layout system in CSS. Explore its features and learn how to create complex layouts with ease.',
            image: maniImg2
        }
    ];

    return (
        <section id="blog" className="blog-section">
            <div className="container">
                <h2 className="blog-title"><FaRegNewspaper /> Blog</h2>
                <div className="row">
                    {blogPosts.map((post, index) => (
                        <div className="col-lg-6 col-md-12 mb-4" key={index}>
                            <Card className="blog-card">
                                <Card.Img variant="top" src={post.image} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                                    <Card.Text>{post.excerpt}</Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
