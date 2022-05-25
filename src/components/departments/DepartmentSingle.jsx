import React, { useEffect } from 'react';
import './departmentSingle.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlog } from '../../redux/features/BlogSlice';

const DepartmentSingle = () => {
    const { blog } = useSelector((state) => state.blog);

    const dispatch = useDispatch();


    const { id } = useParams();

    useEffect(() => {
        dispatch(getBlog(id));

    }, [id, dispatch]);

    return (
        <>
            <section className="departmentSingle">
                <div className="container">
                    <h2 className="h2 departmentSingle-title">We Have Most of Popular Departments</h2>
                    <ul className="departmentSingle-list">
                        <li>
                            <div className="departmentSingle-card">
                                <div className="card-banner">
                                    <img src={blog.image} alt="Artificial Intelligence" />
                                </div>
                                <h3 className="h3 card-title">{blog.card_title}</h3>
                                <h3 className="card-text">
                                    {blog.card_text}
                                </h3>
                                <p className="card-text">
                                    {blog.description}
                                </p>
                                <h3 className="h3 card-title">{blog.sub_card_title}</h3>
                                <p className="card-text">
                                    {blog.sub_description}
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default DepartmentSingle
