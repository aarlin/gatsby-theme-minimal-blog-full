import { Button, Heading, VStack } from "@chakra-ui/react";
import GithubSlugger from "github-slugger";
import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState
} from "react";

interface IProps {
  source: string;
}

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string>>
) => {
  const headingElementsRef = useRef(new Map<string, Element>());

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headings.forEach((heading) => {
        if (heading.isIntersecting) {
          setActiveId(heading.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
    });

    const headingElements = Array.from(
      document.querySelectorAll(".article h2, .article h3")
    );

    headingElements.forEach((element) => {
      observer.observe(element);
      headingElementsRef.current.set(element.id, element);
    });

    return () => observer.disconnect();
  }, [setActiveId]);

  return headingElementsRef;
};

const TableOfContents: FC<IProps> = ({ source }) => {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^###*\s/));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      href: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();
  const headingElementsRef = useIntersectionObserver(setActiveId);

  return (
    <VStack alignItems="left">
      <Heading size="sm">Table of Contents</Heading>
      <VStack spacing={2} alignItems="left">
        {headings.map((heading, index) => {
          return (
            <Button
              key={index}
              variant="link"
              justifyContent="left"
              color="gray.400"
              fontSize="sm"
              pl={(heading.level - 2) * 4}
              _hover={{
                color: "blue.400",
              }}
              _focus={{}}
              onClick={(e) => {
                e.preventDefault();
                const headingAnchor = document.querySelector(`a[href="#${heading.href}"]`);
                const navbar = document.querySelector("#navbar") as HTMLElement;
                const topOffset = navbar ? -navbar.offsetHeight : -90; // Add a buffer of 10 pixels
                const elementPosition = headingAnchor.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset + topOffset;
              
                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }}
              
              fontWeight={heading.href === activeId ? "bold" : "normal"}
            >
              {heading.text}
            </Button>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default TableOfContents;
