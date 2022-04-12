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
        e.preventDefault();;
        window.location = "/#/search?filter="+this.state.search
        window.location.reload();
    }
    render() { 
        return (<div>
            <div className="collapse top-search" id="collapseExample">
            <div className="card card-block">
                <div className="newsletter-widget text-center">
                    <form className="form-inline" method='get' action='/#/search'   onSubmit={this.submit}>
                        <input type="text" className="form-control" name="search" placeholder="What you are looking for?" value={this.state.search} onChange={(e)=> this.setState({search: e.target.value})}/>
                        <button type="submit" className="btn btn-primary"><i className="fa fa-search" ></i></button>
                    </form>
                </div>
            </div>
        </div>

        <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Youtube"><i className="fa fa-youtube"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                        <div className="topmenu text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href="/#/trends"><i className="fa fa-star"></i> Trends</a></li>
                                <li className="list-inline-item"><a href="/#/hot"><i className="fa fa-bolt"></i> Hot Topics</a></li>
                                <li className="list-inline-item"><a href="/#/myArticles"><i className="fa fa-user-circle-o"></i> Write your article</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="header-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                            <a href="/"><img src="images/logo-gloomey.png" alt=""/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Zero Sandmenu" aria-controls="Zero Sandmenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="Zero Sandmenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            
                            <li className="nav-item dropdown has-submenu">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown02">
                                    <li><a className="dropdown-item" href="/#/search?filter=sports">Sports</a></li>
                                    <li><a className="dropdown-item" href="/#/search?filter=fashion">Fashion</a></li>
                                    <li><a className="dropdown-item" href="/#/search?filter=travelling">Travelling</a></li>
                                    <li><a className="dropdown-item" href="/#/search?filter=lifestyle">Lifestyle</a></li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#/search?filter=news">Lastest news</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fa fa-play-circle-o"></i> Videos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#/contact">Contact</a>
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