/** @jsxRuntime classic */
/** @jsx jsx */
import { Flex, jsx, Button } from 'theme-ui'

const ButtonSearch = ({content}) => {
    return (
        <button sx={{
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
      </button>
    )
}

export default ButtonSearch