import axios from "axios";
import React, { Component } from "react";
import BlogFooterCard from "./BlogFooterCard";
class Footer extends Component {
    constructor(props){
      super(props);
      this.state = {
        recent: [],
        hot: []
      }
    }
    componentDidMount(){
      axios.get(window.ENV.ARTICLE_SERVICE_URI).then(res=>{
        this.setState({recent: res.data})
    })
    axios.get(window.ENV.ARTICLE_SERVICE_URI+"/hot").then(res=>{
      this.setState({hot: res.data})  })
    }
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="widget">
                  <h2 className="widget-title">Recent Posts</h2>
                  <div className="blog-list-widget">
                    <div className="list-group">
                      {this.state.recent.map((article, index)=>{
                        if(index < 3) return(
                          <BlogFooterCard key={"recent-"+index} article={article}/>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="widget">
                  <h2 className="widget-title">Popular Posts</h2>
                  <div className="blog-list-widget">
                    <div className="list-group">
                    {this.state.hot.map((article, index)=>{
                        if(index < 3) return(
                          <BlogFooterCard key={"hot-"+index} article={article}/>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="widget">
                  <h2 className="widget-title">Popular Categories</h2>
                  <div className="link-widget">
                    <ul>
                      <li>
                        <a href="#">
                          Fahsion <span>(21)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Lifestyle <span>(15)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Art & Design <span>(31)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Health Beauty <span>(22)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Clothing <span>(66)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Entertaintment <span>(11)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Food & Drink <span>(87)</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <hr className="invis1" />

            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="widget">
                  <div className="footer-text text-center">
                    <a href="index.html">
                      <img
                        src="images/logo-transparent.png"
                        alt=""
                        className="img-fluid"
                      />
                    </a>
                    <p>
                      Zero Sand is a news blog, cameramade photography content,
                      fashion styles from independent creatives around the
                      world.
                    </p>
                    <div className="social">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Instagram"
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>

                    <hr className="invis" />

                    <div className="newsletter-widget text-center">
                      <form className="form-inline">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email address"
                        />
                        <button type="submit" className="btn btn-primary">
                          Subscribe <i className="fa fa-envelope-open-o"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <br />
                <div className="copyright">
                  &copy; Zero-Sand. Designed by:{" "}
                  <a href="http://www.creometry.com">Creometry</a>.
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
