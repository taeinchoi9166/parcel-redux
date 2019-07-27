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
        const {GalleryActions} = this.props;
        GalleryActions.init();
        const {id, page} = this.props.match.params;
        this.page = parseInt(page);

        this.movePrev = () => {
           // GalleryActions.moveToPrev();
            this.page -= 1;
        }

        this.moveNext = () => {
            //GalleryActions.moveToNext();
            this.page += 1;
        }
        this.movePage = (e) =>{
            GalleryActions.move({page:e.target.innerText});
        }

        this.viewGallery = () => {
            GalleryActions.getPhotoItem({id:id,page:page});
        }
        this.quitView = () => {
            GalleryActions.quitView();
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(this.props.item !== nextProps.item || this.props.match.params.page !== nextProps.match.params.page){
            this.page = parseInt(nextProps.match.params.page);
            return true;
        }

        else return false;
    }


    render() {
        return(
            <Fragment>
                { this.props.item && (<Viewer page={this.page} url={this.props.item.get('photoURL')} onQuit={this.quitView}/>)}
                <Grid list={this.props.List} onView={this.viewGallery} curPage={this.page} totalPage={this.props.totalPage}/>
                <PageNav onMove={this.movePage} onMovePrev={this.movePrev} onMoveNext={this.moveNext} curPage={this.page} totalPage={this.props.totalPage}/>
            </Fragment>
        );
    }
}

export default connect(
    (state) => ({
        List:state.gallery.get('list'),
       // curPage:state.gallery.get('curPage'),
        totalPage:state.gallery.get('totalPage'),
        item:state.gallery.get('item')
    }),
    (dispatch) => ({
        GalleryActions:bindActionCreators(galleryActions,dispatch)
    })
)(GalleryContainer);