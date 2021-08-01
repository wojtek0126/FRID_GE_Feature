/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

const MainContainerA = ({content}) => {
    return (
        <Flex sx={{
            backgroundColor: 'background',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        {content}
      </Flex>
    )
}

export default MainContainerA