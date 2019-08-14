import React, {lazy,Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Loading from './pages/common/Loading/Loading'
import TabBar from './components/tab-bar/tab-bar'

const Mine = lazy(()=>import('./pages/mine/Mine/Mine'));
const News = lazy(()=>import('./pages/news/News/News'));
const Picture = lazy(()=>import('./pages/picture/Picture/Picture'));
const Discover = lazy(()=>import('./pages/discover/Discover/Discover'));

const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));
const Login = lazy(()=>import('./pages/common/Login/Login'));


const AppPanel = (props)=>{
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/" exact render={()=>{
                        return <Redirect to="/home" />
                    }}/>
                    <Route path="/news" component={News}/>
                    <Route path='/picture/:flag' component={Picture}/>
                    <Route path='/discover' component={Discover}/>
                    <Route path='/mine' component={Mine}/>
                    <Route component={NotFind}/>
                </Switch>
                
                <TabBar />
            </div>
        </Router>
    )
    
}

const App = (props)=>{
    return (
        <Suspense fallback={<Loading/>}>
            {props.isLogin ? <AppPanel/> : <Login/>}
        </Suspense>
    )
}

const mapStateToProps = (state)=>({
    isLogin: state.user.isLogin
});
const mapDispatchToProps = (state)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(App)
