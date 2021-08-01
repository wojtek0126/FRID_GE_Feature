/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx } from 'theme-ui'

const ButtonPrimary = ({content}) => {
    return (
        <Button sx={{
            display: 'flex',
            width: '25%',
            height: '25%',
            backgroundColor: 'background',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid',
            borderColor: 'border',
            margin: 3,
            padding: 3
        }}>
        {content}
      </Button>
    )
}
ButtonPrimary
export default ButtonPrimary