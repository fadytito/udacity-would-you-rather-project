import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
// import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Row, Col, Nav, NavItem, NavLink} from 'reactstrap';
import Navbar from './Navbar';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (



            <div>
                <Navbar/>

                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-sm-8'>
                                { this.props.questionIds.map((id) => {
                                    return (
                                        <Question id={id} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions }) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);