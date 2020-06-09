import React, { Component } from 'react';
import { Form, Input, Button, } from 'antd';
import {getSearchDetails} from 'redux/actions/Search';
import idx from 'idx';
import {connect} from 'react-redux';
import MovieDetailsPoster from 'views/components/MovieDetailsPoster';
import { Card } from 'antd';

class Search extends Component {

    onFinish = (value) =>{
        console.log(value)
        this.props.getSearchDetails(value.search);
    }

    render() {
        console.log("ddd ",this.props.search_data);
        return (
            <div>
                <div className="parent-row parent-h-center mb-40">
                    <Form
                        name="basic"
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={this.onFinish}
                        // onFinishFailed={onFinishFailed}
                        layout="inline"
                        colon={false}
                        hideRequiredMark={true}
                        size={'large'}
                    >
                        <Form.Item
                            label=""
                            name="search"
                            rules={[
                            {
                                required: true,
                                message: 'Please Enter Text!',
                            },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                { Object.keys(this.props.search_data).length ?
                <div className="parent-col">
                    <div className="active-card mr-20 mb-20">
                        <MovieDetailsPoster 
                            title={idx(this.props.search_data,_=>_.Title)}
                            imdbVotes={idx(this.props.search_data,_=>_.imdbVotes)}
                            imdbRating={idx(this.props.search_data,_=>_.imdbRating)}
                            poster={idx(this.props.search_data,_=>_.Poster)}
                        />            
                    </div>
                    <div className="parent-row parent-wrap">
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Genre
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Genre)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Released
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Released)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                            Type
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Type)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                            Writer
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Writer)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Director 
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Director)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Actors 
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Actors)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Awards 
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Awards)}
                            </div>
                        </Card>
                        <Card className="mb-20 mr-20">
                            <div className="card-sub-name">
                                Plot 
                            </div>
                            <div>
                                {idx(this.props.search_data,_=>_.Plot)}
                            </div>
                        </Card>
                    </div>
                </div>

                :null}
            </div>
        );
    }
}

// export default Search;
function mapStateToProps(state){
    return{
        search_data:state.Search.search_data
    }
}

export default connect(mapStateToProps,{
    getSearchDetails
})(Search);