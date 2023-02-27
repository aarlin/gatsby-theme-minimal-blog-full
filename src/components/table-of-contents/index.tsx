import { Box, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FragmentLink } from './FragmentLink'

export const TableOfContents = ({ headings }) => {
  const [activeFragment, setActiveFragment] = useState<HTMLHeadingElement>()

  useEffect(() => {
    setActiveFragment(headings[0].item)
  }, [])

  return (
    <Box
      as="aside"
      display={{ base: 'none', md: 'block' }}
      pos="sticky"
      top="20"
    >
      <Box as="nav">
        <Text
          as="h2"
          fontSize="sm"
          fontWeight="medium"
          letterSpacing=".8px"
          mb="4"
          textTransform="uppercase"
        >
          Table of Contents
        </Text>
        {headings.map((heading, index) => (
          <FragmentLink
            key={`${heading.href}-${index}`}
            heading={heading}
            active={activeFragment === heading.item}
            setActiveFragment={setActiveFragment}
          >
            {heading.textContent}
          </FragmentLink>
        ))}
      </Box>
    </Box>
  )
}

export type Heading = ReturnType<typeof makeHeadingObject>

const makeHeadingObject = (item: HTMLHeadingElement) => {
  const textContent = item.textContent ?? ''
  const childAnchorElement = item.querySelector('a')
  const href = childAnchorElement?.getAttribute('data-href') ?? '#'

  return {
    item,
    href,
    textContent,
  }
}
