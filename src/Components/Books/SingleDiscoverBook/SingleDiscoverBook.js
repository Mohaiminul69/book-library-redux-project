import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch } from "react-redux";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { addToReadingList } from "../../../redux/slices/bookSlice";

const SingleDiscoverBook = ({ books }) => {
    const { img, name, author, rating, details } = books;
    const dispatch = useDispatch();

    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                <Col>
                    <Card className='flex-row my-2'>
                        <Row xs={1} md={1} lg={2}>
                            <Col lg={4}>
                                <Card.Img src={img} />
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
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>}
                                                {rating === 4 && <div>
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>}
                                            </div>
                                            <div className='mx-1'>
                                                <Tooltip title="Marked as Finished">
                                                    <IconButton>
                                                        <CheckCircleIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                            <div className='d-flex'>
                                                <div className='mx-1'>
                                                    <Tooltip title="Read the Book">
                                                        <IconButton>
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </div>
                                                <div className='mx-1'>
                                                    <Tooltip title="Add to Reading List">
                                                        <IconButton onClick={() => dispatch(addToReadingList(books))} >
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