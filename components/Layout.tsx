import React,{ ReactNode } from 'react'
import Header from './Header'
import 'react-bulma-components/dist/react-bulma-components.min.css';

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ( props ) => (
  <div>
    <Header />
    <div className="layout">{props.children}</div>
 
  </div>
)

export default Layout
