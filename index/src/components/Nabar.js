import React, { Component } from 'react';
class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            search: ""
        }
        this.submit = this.submit.bind(this)
    }
    submit(e){
        e.preventDefault();
        window.location = "/#/search?filter="+this.state.search
    }
    render() { 
        return (<div>
            <div class="collapse top-search" id="collapseExample">
            <div class="card card-block">
                <div class="newsletter-widget text-center">
                    <form class="form-inline" method='get' action='/#/search' plain={true}  onSubmit={this.submit}>
                        <input type="text" class="form-control" name="search" placeholder="What you are looking for?" value={this.state.search} onChange={(e)=> this.setState({search: e.target.value})}/>
                        <button type="submit" class="btn btn-primary"><i class="fa fa-search" ></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div class="topbar-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div class="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i class="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i class="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i class="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 hidden-md-down">
                        <div class="topmenu text-center">
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="/#/trends"><i class="fa fa-star"></i> Trends</a></li>
                                <li class="list-inline-item"><a href="/#/hot"><i class="fa fa-bolt"></i> Hot Topics</a></li>
                                <li class="list-inline-item"><a href="/#/myArticles"><i class="fa fa-user-circle-o"></i> Write your article</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div class="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo">
                            <a href="/"><img src="images/logo-transparent.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Zero Sandmenu" aria-controls="Zero Sandmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="Zero Sandmenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            
                            <li class="nav-item dropdown has-submenu">
                                <a class="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul class="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a class="dropdown-item" href="#">Sports</a></li>
                                    <li><a class="dropdown-item" href="#">Fashion</a></li>
                                    <li><a class="dropdown-item" href="#">Travelling</a></li>
                                    <li><a class="dropdown-item" href="#">Lifestyle</a></li>

                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">GameHub</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-play-circle-o"></i> Videos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

        </div>);
    }
}
 
export default Navbar;