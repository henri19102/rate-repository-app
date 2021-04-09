import React from "react";
import { render } from "@testing-library/react-native";
import RepositoryListContainer from "../components/repositoryComponents/RepositoryListContainer";
import { checkIfThousand } from "../components/repositoryComponents/RepositoryItemFigures";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const firstRepository = repositories.edges[0].node;
      const secondRepository = repositories.edges[1].node;

      const fullNames = getAllByTestId("fullName");
      expect(fullNames[0]).toHaveTextContent(firstRepository.fullName);
      expect(fullNames[1]).toHaveTextContent(secondRepository.fullName);

      const descriptions = getAllByTestId("description");
      expect(descriptions[0]).toHaveTextContent(firstRepository.description);
      expect(descriptions[1]).toHaveTextContent(secondRepository.description);

      const languages = getAllByTestId("language");
      expect(languages[0]).toHaveTextContent(firstRepository.language);
      expect(languages[1]).toHaveTextContent(secondRepository.language);

      const stargazersCounts = getAllByTestId("stargazersCount");
      expect(stargazersCounts[0]).toHaveTextContent(
        checkIfThousand(firstRepository.stargazersCount)
      );
      expect(stargazersCounts[1]).toHaveTextContent(
        checkIfThousand(secondRepository.stargazersCount)
      );

      const forksCounts = getAllByTestId("forksCount");
      expect(forksCounts[0]).toHaveTextContent(
        checkIfThousand(firstRepository.forksCount)
      );
      expect(forksCounts[1]).toHaveTextContent(
        checkIfThousand(secondRepository.forksCount)
      );

      const ratingAverages = getAllByTestId("ratingAverage");
      expect(ratingAverages[0]).toHaveTextContent(
        checkIfThousand(firstRepository.ratingAverage)
      );
      expect(ratingAverages[1]).toHaveTextContent(
        checkIfThousand(secondRepository.ratingAverage)
      );

      const reviewCounts = getAllByTestId("reviewCount");
      expect(reviewCounts[0]).toHaveTextContent(
        checkIfThousand(firstRepository.reviewCount)
      );
      expect(reviewCounts[1]).toHaveTextContent(
        checkIfThousand(secondRepository.reviewCount)
      );
    });
  });
});
