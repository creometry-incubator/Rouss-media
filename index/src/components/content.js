import React, { Component } from 'react';
import Sidebar from './Sidebar';
class Content extends Component {
    render() { 
        return (
            <div>
<section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div class="blog-title-area">
                                
                                
                                <div class="tag-cloud-single">
                                    <span>Tags</span>
                                    <small><a href="#" title="">lifestyle</a></small>
                                    <small><a href="#" title="">colorful</a></small>
                                    <small><a href="#" title="">trending</a></small>
                                    <small><a href="#" title="">another tag</a></small>

                            </div>
                                <h3>The golden rules you need to know for a positive life</h3>

                                <div class="blog-meta big-meta">
                                    <small><a href="single.html" title="">21 July, 2017</a></small>
                                    <small><a href="blog-author.html" title="">by Jessica</a></small>
                                </div>

                            </div>

                            <div class="single-post-media">
                                <img src="upload/menu_08.jpg" alt="" class="img-fluid"/>
                            </div>

                            <div class="blog-content">  
                                <div class="pp">
                                    <p>In lobortis pharetra mattis. Morbi nec nibh iaculis, <a href="#">bibendum augue a</a>, ultrices nulla. Nunc velit ante, lacinia id tincidunt eget, faucibus nec nisl. In mauris purus, bibendum et gravida dignissim, venenatis commodo lacus. Duis consectetur quis nisi nec accumsan. Pellentesque enim velit, ut tempor turpis. Mauris felis neque, egestas in lobortis et,iaculis at nunc ac, rhoncus sagittis ipsum. </p>

                                    <h3><strong>Maecenas non convallis quam, eu sodales justo. Pellentesque quis lectus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></h3>

                                    <p>Donec nec metus sed leo sollicitudin ornare sed consequat neque. Aliquam iaculis neque quis dui venenatis, eget posuere felis viverra. Ut sit amet feugiat elit, nec elementum velit. Sed eu nisl convallis, efficitur turpis eu, euismod nunc. Proin neque enim, malesuada non lobortis nec, facilisis et lectus. Ie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </p>

                                    <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                </div>

                                <img src="upload/menu_05.jpg" alt="" class="img-fluid img-fullwidth"/>

                                <div class="pp">
                                    <h3><strong>Nam non velit est. Sed lobortis arcu vitae nunc molestie consectetur. Nam eget neque ac ex fringilla dignissim eu ac est. Nunc et nisl vel odio posuere. </strong></h3>

                                    <p>Vivamus non condimentum orci. Pellentesque venenatis nibh sit amet est vehicula lobortis. Cras eget aliquet eros. Nunc lectus elit, suscipit at nunc sed, finibus imperdiet ipsum. Maecenas dapibus neque sodales nulla finibus volutpat. Integer pulvinar massa vitae ultrices posuere. Proin ut tempor turpis. Mauris felis neque, egestas in lobortis et, sodales non ante. Ut vestibulum libero quis luctus tempus. Nullam eget dignissim massa. Vivamus id condimentum orci. Nunc ac sem urna. Aliquam et hendrerit nisl massa nunc. </p>

                                    <p>Morbi pharetra porta consequat. Aenean et diam sapien. <a href="#">Interdum et malesuada</a> fames ac ante ipsum primis in faucibus. Pellentesque dictum ligula iaculis, feugiat metus eu, sollicitudin ex. Quisque eu ullamcorper ligula. In vel ex ac purus finibus viverra. Maecenas pretium lobortis turpis. Fusce lacinia nisi in tortor massa nunc.</p>

                                    <ul class="check">
                                        <li>Integer sit amet odio ac lectus imperdiet elementum.</li>
                                        <li>Praesent vitae lacus sed lacus ullamcorper mollis.</li>
                                        <li>Donec vitae metus ac felis vulputate tincidunt non et ex.</li>
                                        <li>In dapibus sapien at viverra venenatis.</li>
                                        <li>Pellentesque mollis velit id maximus finibus.</li>
                                    </ul>

                                    <p>Proin ultricies nulla consectetur, sollicitudin dolor at, sollicitudin mauris. Maecenas at nunc nunc. Ut nulla felis, tincidunt et porttitor at, rutrum in dolor. Aenean id tincidunt ligula. Donec vitae placerat odio. Mauris accumsan nibh ut nunc maximus, ac auctor elit vehicula. Cras leo sem, vehicula a ultricies ac, condimentum vitae lectus. Sed ut eros euismod, luctus nisl eu, congue odio. </p>
                                </div>
                            </div>

                            

                        </div>
                    </div>

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </section>
            </div>
        );
    }
}
 
export default Content;