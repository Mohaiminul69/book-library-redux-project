import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import DiscoverBooks from '../DiscoverBooks/DiscoverBooks';
import ReadingList from '../ReadingList/ReadingList';
import { useSelector } from 'react-redux';

const BooksHome = () => {
    const readingList = useSelector((state) => state.books.readingList);

    return (
        <div>
            <Navigation />
            <div className='tabMarginTop'>
                <Container>
                    <div>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="firstTab">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item className='cursor'>
                                            <Nav.Link eventKey="firstTab" className='tabNavFont'>Discover Books</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='cursor my-1'>
                                            <Nav.Link eventKey="secondTab" className='tabNavFont'>Reading List <span className='numberAlert'>{readingList.length}</span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='cursor'>
                                            <Nav.Link eventKey="thirdTab" className='tabNavFont'>Finished List <span className='numberAlert'>0</span></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="firstTab">
                                            <DiscoverBooks />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="secondTab">
                                            <ReadingList />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="thirdTab">

                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default BooksHome;