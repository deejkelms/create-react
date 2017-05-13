import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import { Link } from 'react-router'
import { translate } from 'admin-on-rest'

import { ProductIcon } from '../contractors'

const LinkToRelatedProducts = ({ record, translate }) => (
  <FlatButton
    primary
    label={translate('resources.categories.fields.contractors')}
    icon={<ProductIcon />}
    containerElement={<Link to={{ pathname: '/contractors', query: { filter: JSON.stringify({ category_id: record.id }) } }} />}
  />
)

export default translate(LinkToRelatedProducts)
