/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

const ItemContainerA = ({content}) => {
    return (
        <Flex sx={{
            flexWrap: 'wrap',
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

export default ItemContainerA