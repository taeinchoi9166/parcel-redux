import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as galleryActions from '../store/modules/gallery';
import {Grid} from "../Components/gallery/Grid";
import {PageNav} from '../Components/gallery/PageNav';
import {Viewer} from '../Components/gallery/Viewer';

class GalleryContainer extends Component{
    constructor(props){
        super(props);
        galleryActions.init();
        this.movePrev = () => {
            galleryActions.moveToPrev();
        }

        this.moveNext = () => {
            galleryActions.getPhotoItem({id:3})
            galleryActions.moveToNext();
        }
    }



    render() {
        console.log(this.props);
        return(
            <Fragment>
                <Viewer page={this.props.curPage} url={'/p4.7b5749b5.jpg'}/>
                <Grid list={this.props.List} curPage={this.props.match.params.id} totalPage={4}/>
                <PageNav onMovePrev={this.movePrev} onMoveNext={this.moveNext} curPage={this.props.curPage} totalPage={4}/>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        List:state.gallery.get('list'),
        curPage:state.gallery.get('curPage'),
        totalPage:state.gallery.get('totalPage')
    }),
    (dispatch) => ({
        GalleryActions:bindActionCreators(galleryActions,dispatch)
    })
)(GalleryContainer);