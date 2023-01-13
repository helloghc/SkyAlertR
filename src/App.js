/* Libraries */
import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  NavLink,
  Route,
  Switch,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import { ModalContext } from './context';
import ModalEpicenter from './components/Modal/Epicenter';
/* Controllers */
import Backend from 'controllers/Backend';

/* Utils */
import strings  from 'config/strings';
import { device } from 'utils/media';
/* Containers */
import ArticleDetail from 'containers/ArticleDetail';
import Feed from 'containers/Feed';
import CommentsOnly from 'containers/CommentsOnly';
/* Components */
import PreloaderPage from 'components/PreloaderPage';
import Advertising from 'components/Advertising';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Footer from 'components/Footer';
// import BreakingNewsBanner from 'components/BreakingNewsBanner';
import NotFound from 'components/NotFound';

// Import CSS reset and Global Styles
import 'utils/global-styles';
import { LIGHT, DARK } from 'config/colors';

const SYSTEM = process.env.REACT_APP_COUNTRY || 'MX' ;
const TIME_PRELOADER = 500;
const DISPLAY_BRAND_MAIN = 992; //laptopS SIZE

const AppWrapper = styled.div`
  height:100%;
  width:100%;
`;

const ContainerMain = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  background: ${({theme}) => (theme.containerMain)};
`;

const Pusher = styled.div`
  position: relative;
	left: 0;
	z-index: 30;
	transition: transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1);

  &.active{
    transform: translate3d(100%, 0, 0);
  }
`;

const Content = styled.div`
  position: relative;
  height: 100%;
  background: ${({theme}) => (theme.background)} !important;
  flex-direction: column;
  display: flex;
  transition: transform 600ms cubic-bezier(0.4, 0.0, 0.2, 1), background 400ms;
`;

const Main = styled.main`
  position: relative;
  z-index: 2;

  @media ${device.laptop} {
    padding: 30px;
  }
`;

class App extends Component {	
  constructor() {
    super();
    this.state = {
      displayNavbar:false,
			isSticky: true,
			isOpenModalEpicenter: false,
      pastNavBar: false,
      searchText: false,
      facebookCommentsUrl: false,
      theme: LIGHT,
      isLoadingPage: true,
      changeNavBarAt:  0,
      widthPage: 0,
      activeMenu: false,
      heightNavbar: 0,
    };
    
    this.api = Backend.init();
    this.api.callback.push(this);

    this.handleLoad   = this.handleLoad.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.timerID = null;
    this.refBrandNav = React.createRef();
    this.refNavBar = React.createRef();
  }

  componentDidMount() {
    ReactGA.initialize('UA-167851178-1');
    ReactGA.set({page: 'home'});
    ReactGA.pageview(`${window.location.pathname}home`);
    
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('load', this.handleLoad);

    this.setLimitNavbar();
  }

  async componentWillMount() {
    if(this.timerID){
      clearTimeout(this.timerID);
    }

    console.log(window.location.pathname);
    if(window.location.pathname.includes('/mobile-post')){
      //console.log("Si lo contiene");
      this.setState({ facebookCommentsUrl: true });
    }
    else{
      //console.log("No lo contienre");
      this.setState({ facebookCommentsUrl: false });
    }
  }

  componentWillReceiveProps(nextProps) {
    //console.log(window.location.pathname);
    if(window.location.pathname.includes('/mobile-post')){
      //console.log("Si lo contiene");
      this.setState({ facebookCommentsUrl: true });
    }
    else{
      //console.log("No lo contienre");
      this.setState({ facebookCommentsUrl: false });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad);
    window.removeEventListener('resize', this.handleScroll);
    window.removeEventListener('scroll', this.onScroll);
  }

  handleLoad() {
    this.timerID = setTimeout(() => {
      this.setState(({isLoadingPage})=>({isLoadingPage: !isLoadingPage}));
    },
    TIME_PRELOADER);
  }

  handleScroll() {
    const { changeNavBarAt, pastNavBar } = this.state;
    if (window.pageYOffset >= changeNavBarAt && !pastNavBar ){
      this.setState({ pastNavBar: true });
    } 
    if (window.pageYOffset <= changeNavBarAt && pastNavBar){
      this.setState({ pastNavBar: false });
    }
  }

  handleResize(){
    this.setLimitNavbar();
  }

  setLimitNavbar(){
    const sizeWidth = window.innerWidth || window.outerWidth;
    if(this.refNavBar && this.refBrandNav){
      const refElement = sizeWidth >= DISPLAY_BRAND_MAIN ? this.refBrandNav : this.refNavBar;
      const refNav = this.refNavBar;

      if(refElement.current && refNav.current){
        const { current: { scrollHeight: height }}  = refNav;
        const { current: { scrollHeight }} = refElement;
        this.setState({changeNavBarAt: scrollHeight, heightNavbar: height});
      }
    }
  }

  triggerSearch = (searchText) => {
    //console.log("Search Triggered");
    //console.log(searchText);
    this.setState({ searchText: searchText });
  }

  handleOpenMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setTimeout(() => {
      this.setState(({activeMenu: true }));
    }, 200);
  };

  handleHideMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setTimeout(()=>{
        this.setState(({activeMenu: false }));
    },200)
  };

  handleSwitchTheme = e => {
    let theme = e.target.checked;
    !theme ? (theme = LIGHT) : (theme = DARK);
    this.setState({ theme });
  };

  handleButtonTheme = (e, type) => {
    e.preventDefault();
    let theme = '';
    type === 'LIGHT' ? (theme = DARK) : (theme = LIGHT);
    this.setState({ theme });
  };

  toggleModalEpicenter = () => {
		this.setState({
			isOpenModalEpicenter: !this.state.isOpenModalEpicenter
		});
	};

  render() {
    const { news } = strings().ROUTE;
    
    const {
      isLoadingPage, 
      pastNavBar,
      heightNavbar,
      activeMenu,
      theme,
      facebookCommentsUrl
    } = this.state;

    const supportsHistory = 'pushState' in window.history;

    const STATUS_BAR_ANDROID = theme.darkPrimary;
    const STATUS_BAR_IOS = SYSTEM === 'US' ? 'default' : 'black-translucent';
    const TITLE_PAGE = `SkyAlert News - ${SYSTEM}`;
    const HOST = SYSTEM === 'US' ? 'https://news.skyalertusa.com/' : 'https://news.skyalert.mx/';

    return (
      <ModalContext.Provider value={{
				isOpen: this.state.isOpenModalEpicenter,
				toogleOpen: this.toggleModalEpicenter,
			}}>
      <ThemeProvider theme={theme}>
        <BrowserRouter forceRefresh={!supportsHistory}>
          { facebookCommentsUrl ? (
            <AppWrapper theme={theme}>
              <Route exact path="/mobile-post/:articleId" component={CommentsOnly} />
            </AppWrapper>
            ) : (
            <AppWrapper theme={theme}>
              <Helmet bodyAttributes={{style: `overflow: ${isLoadingPage || activeMenu ? 'hidden': 'auto'}`}}>
                <title>{TITLE_PAGE}</title>
                <meta name="robots" content="NOODP" />
                <meta name="description" content={TITLE_PAGE}/>
                <meta property="og:url" content={HOST} />
                <meta property="og:title" content={TITLE_PAGE} />
                <meta property="og:image" content={`${HOST}img/logo.png`} />
                <meta property="fb:app_id" content="881811818644187" />
                <meta property="og:site_name" content="SkyAlert" />
                <meta property="og:type" content="website" />
                <meta name="theme-color" content={STATUS_BAR_ANDROID} />
                <meta name="apple-mobile-web-app-status-bar-style" content={STATUS_BAR_IOS} />
              </Helmet>
              <ContainerMain>
                <SideBar 
                  isActive={activeMenu} 
                  handleMenu={this.handleHideMenu} 
                  switchThemeChange={this.handleSwitchTheme} />
                <Pusher className={activeMenu ? 'active' : ''}>
                  <Content>
                    {/* TODO: Remove unnecessary component and consume extra request of feed */}
                      {/* <BreakingNewsBanner handleTopBanner={this.handleTopBanner} /> */}
                      <Header 
                        onRefBrand={this.refBrandNav}
                        onRefNavBar={this.refNavBar}
                        buttonThemeChange={this.handleButtonTheme}
                        buttonMenu={this.handleOpenMenu}
                        pastNavBar={pastNavBar}
                        heightNavbar={heightNavbar}
                        />
                      <Main>
                          {/* <Advertising /> */}
                          <Switch>
                            <Route exact path="/" render={(props) => <Feed {...props} />} />
                            <Route exact path={`/:articleId`} component={ArticleDetail}/>
                            <Route exact path={`/${news}/:articleId`} component={ArticleDetail}/>
                            <Route path='/404' component={NotFound} />
                            <Redirect exact from='*' to='/404' />
                          </Switch>
                      </Main>
                      <Footer />
                    </Content>
                </Pusher>
              </ContainerMain>
              <PreloaderPage loading={isLoadingPage} />
            </AppWrapper>
          )}
        </BrowserRouter>
      </ThemeProvider>
      {
					this.state.isOpenModalEpicenter && (
						<ModalEpicenter
							id="modal"
							isOpen={this.state.isOpenModalEpicenter}
							onClose={this.toggleModalEpicenter}
						/>
					)
				}
      </ModalContext.Provider>
    );
  }
}


export default App;

