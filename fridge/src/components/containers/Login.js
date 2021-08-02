/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

const Login
 = ({content}) => {
    return (
        <Flex sx={{
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backgroundColor: 'background',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'border',
            margin: 3,
            padding: 3
        }}>
        {content}
      </Flex>
    )
}

export default Login
