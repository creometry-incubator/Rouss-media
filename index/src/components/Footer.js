import React, { Component } from "react";
import BlogFooterCard from "./BlogFooterCard";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="widget">
                  <h2 class="widget-title">Recent Posts</h2>
                  <div class="blog-list-widget">
                    <div class="list-group">
                      <BlogFooterCard />
                      <BlogFooterCard />
                      <BlogFooterCard />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="widget">
                  <h2 class="widget-title">Popular Posts</h2>
                  <div class="blog-list-widget">
                    <div class="list-group">
                      <BlogFooterCard />

                      <BlogFooterCard />
                      <BlogFooterCard />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div class="widget">
                  <h2 class="widget-title">Popular Categories</h2>
                  <div class="link-widget">
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

            <hr class="invis1" />

            <div class="row">
              <div class="col-lg-8 offset-lg-2">
                <div class="widget">
                  <div class="footer-text text-center">
                    <a href="index.html">
                      <img
                        src="images/logo-transparent.png"
                        alt=""
                        class="img-fluid"
                      />
                    </a>
                    <p>
                      Zero Sand is a news blog, cameramade photography content,
                      fashion styles from independent creatives around the
                      world.
                    </p>
                    <div class="social">
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Facebook"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Twitter"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a
                        href="#"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Instagram"
                      >
                        <i class="fa fa-instagram"></i>
                      </a>
                    </div>

                    <hr class="invis" />

                    <div class="newsletter-widget text-center">
                      <form class="form-inline">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your email address"
                        />
                        <button type="submit" class="btn btn-primary">
                          Subscribe <i class="fa fa-envelope-open-o"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 text-center">
                <br />
                <div class="copyright">
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
