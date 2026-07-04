import { portfolioData } from "@/data";
import type { PortfolioData } from "@/types/portfolio";

export async function getPortfolioData(): Promise<PortfolioData> {
  // Later this can become a fetch call to your Go REST API without changing UI components.
  return portfolioData;
}
