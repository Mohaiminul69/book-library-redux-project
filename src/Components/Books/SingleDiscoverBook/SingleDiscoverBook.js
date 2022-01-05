import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import { Button, IconButton, Tooltip } from '@mui/material';
import { useDispatch } from "react-redux";
import { addToReadingList } from "../../../redux/slices/bookSlice";
import { Link } from 'react-router-dom';

const SingleDiscoverBook = ({ book }) => {
    const { img, name, author, rating, details, price } = book;
    const dispatch = useDispatch();
    const premiumAlert = () => {
        alert("Premium user can read the book! N.B. It's a sample button! ")
    }

    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card className='flex-row my-2'>
                        <Row xs={1} md={1} lg={2}>
                            <Col lg={4}>
                                <Card.Img src={img} alt="Book Cover Image" />
                            </Col>
                            <Col lg={8}>
                                <Card.Body>
                                    <Card.Title className='pb-1 cardTitleFont'>{name}</Card.Title>
                                    <Card.Subtitle>{author}</Card.Subtitle>
                                    <Card.Text className='pt-1'>{details}
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                {rating === 5 && <div>
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                </div>}
                                                {rating === 4 && <div>
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                    <StarIcon className='ratingStar' />
                                                </div>}
                                            </div>
                                            <div className='d-flex'>
                                                <div className='mx-1'>
                                                    <Tooltip title="Buy Now">
                                                        <Link to={`/payment/${price}`} style={{ textDecoration: 'none' }}><Button className='btnBg txtGreen'>Buy Now</Button></Link>
                                                    </Tooltip>
                                                </div>
                                                <div className='mx-1'>
                                                    <Tooltip title="Read the Book">
                                                        <IconButton onClick={premiumAlert} className='hoverBlack'>
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                                <div className='mx-1'>
                                                    <Tooltip title="Add to Reading List">
                                                        <IconButton onClick={() => dispatch(addToReadingList(book))} className='hoverGreen'>
                                                            <AddIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default SingleDiscoverBook;