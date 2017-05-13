import React from 'react'
import { Card, CardHeader, CardActions } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import LightBulbIcon from 'material-ui/svg-icons/action/lightbulb-outline'
import CodeIcon from 'material-ui/svg-icons/action/code'
import FlatButton from 'material-ui/FlatButton'

export default ({style}) => (
  <Card style={{style}}>
    <CardHeader
      title={('Welcome to AskJacks Admin Panel!')}
      subtitle={('This is the Test admin panel. Feel free to explore and modify the data - it\'s local to your computer, and will reset each time you reload.')}
      avatar={<Avatar backgroundColor='#FFEB3B' icon={<LightBulbIcon />} />}
    />
    <CardActions style={{ textAlign: 'right' }}>
      <FlatButton label={('Source Code')} icon={<CodeIcon />} href='https://gitlab.com/askjack/askjack-admin' />
    </CardActions>
  </Card>
)
