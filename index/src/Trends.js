import axios from 'axios';
import React, { Component } from 'react';
import BlogBox4 from './components/BlogBox4';
class Trends extends Component {
    constructor(props){
        super(props);
        this.state = {
          hot: [],
          index: 1,
        }
      }
      componentDidMount(){
      axios.get(window.ENV.ARTICLE_SERVICE_URI+"/hot").then(res=>{
        this.setState({hot: res.data})  })
      }
    render() { 
        return (
            <div>
                <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i class="fa fa-star bg-pink"></i> Trends </h2>
                    </div>
                                     
                </div>
            </div>
        </div>

        <section class="section wb">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="portfolio row">
                                {this.state.hot.map((article,index)=>{
                                    if(index < ( this.state.index *6) && index >= ((this.state.index-1)*6)) return(
                                        <div className='col-md-4'>
                                        <BlogBox4 article={article} />
                                    </div>
                                    )
                                })}

                            </div>
                        </div>

                        <hr class="invis"/>

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        {[...Array(Math.ceil((this.state.hot.length)/6))].map((e, i) =><li class="page-item" onClick={()=>this.setState({index: i+1})}><a class="page-link">{i+1}</a></li>)}
                                        {this.state.index== 1? <div></div>:
                                        <li class="page-item" onClick={()=>this.setState({index: this.state.index - 1})}>
                                        <a class="page-link">Back</a>
                                        </li>
                                        }
                                        {this.state.index== Math.floor(this.state.hot.length/7) + 1? <div></div>:
                                        <li class="page-item" onClick={()=>this.setState({index: this.state.index + 1})}>
                                        <a class="page-link">Next</a>
                                        </li>}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
    }
}
 
export default Trends;