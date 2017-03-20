import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { AppBar, Sidebar, Notification } from 'admin-on-rest/lib/mui'
import { setSidebarVisibility as setSidebarVisibilityAction } from 'admin-on-rest'

injectTapEventPlugin()

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  body: {
    backgroundColor: '#edecec',
    display: 'flex',
    flex: 1,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    padding: '2em'
  },
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
    zIndex: 1200
  }
}

class MyLayout extends Component {
  componentWillMount () {
    this.props.setSidebarVisibility(true)
  }

  render () {
    const { children, isLoading, menu, title } = this.props
    return (
      <MuiThemeProvider>
        <div style={styles.main}>
          <AppBar title={title} />
          <div className='body'style={styles.body}>
            <div style={styles.content}>
              {children}
            </div>
              <Sidebar theme={theme}>
                {menu}
              </Sidebar>
          </div>
          <Notification />
          {isLoading && <CircularProgress
            color='#fff'
            size={width === 1 ? 20 : 30}
            thickness={2}
            style={styles.loader}
            />}
        </div>
      </MuiThemeProvider>
    )
  }
}

MyLayout.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node,
  menu: PropTypes.element,
  setSidebarVisibility: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

function mapStateToProps (state) {
  return {
    isLoading: state.admin.loading > 0
  }
}

export default connect(mapStateToProps, {
  setSidebarVisibility: setSidebarVisibilityAction
})(MyLayout)
