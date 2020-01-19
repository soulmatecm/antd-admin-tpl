import React from 'react'
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch
} from 'react-router-dom'

export default function DeviceDetail() {
  console.log(useParams())
  return <div>DeviceDetail</div>
}
