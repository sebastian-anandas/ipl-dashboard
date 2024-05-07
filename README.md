# IPL DASHBOARD
### Project Link:
[ipl-dashboard-seb.eu-north-1.elasticbeanstalk.com](http://ipl-dashboard-seb.eu-north-1.elasticbeanstalk.com/)
### GitHub Repository Link (Master Branch):
[sebastian-anandas/ipl-dashboard](https://github.com/sebastian-anandas/ipl-dashboard/tree/master) 

## Introduction
Introducing the IPL Dashboard, a user-friendly application designed for analyzing and evaluating your favorite teams performance across multiple seasons in the Indian Premier League.
The IPL Dashboard is designed for IPL fans and cricket enthusiasts.
## Functionality
1. Home Page
* Team Tiles Hover: Users can hover over team tiles on the homepage to check if they were champions of the IPL.
* Team Details: Clicking on each team tile redirects users to a page displaying the latest match details that the team played.
  
2. Team Page
* Recent Match Display:
  - Users can view the most recent match played by the team on the Team Page, including details such as score, result, toss decision, venue, etc.
  - The Team Page also showcases the results of the team's previous three matches.
* Hyperlinked Team Names:
  - Team names on the page are hyperlinked, allowing users to click and navigate to the detailed page for the selected team.
* Win-Loss Pie Chart:
  - A pie chart visually represents the team's win and loss matches, providing a quick overview of their performance.

Clicking on "more" will redirect users to the Matches page, listing all matches played by the team throughout the IPL tournaments.


3. Match Page
  - Displays all matches played by the team, including details like score, result, toss decision, venue, etc., for the selected year.
  - Users can select a specific year to view matches played by the team during that year.

## Technology Stack
* Programming Languages: Java for the backend and JavaScript for the React frontend of the project.
* Spring Boot
  - Spring Boot was leveraged as the primary framework for our main server application, which acts as the servlet container deployed for our project.
* Spring Batch
  - Spring Batch to process and ingest data obtained from a data source.
* Java Persistence API, JPQL and JPA Repositories
  - JPA for database interaction, including repositories and JPQL queries, to not only interact with the database but also extract additional insights from the data ingested from external sources.
* Spring MVC APIs

## Data Source
* IPL Dataset - https://www.kaggle.com/datasets/utkarshtomar736/ipl-mens-cricket-matches-data-2008-2023

## User Interface
* React frontend
* Functional Components, Effects, Hooks
* CSS Grid

## Deployment
* AWS Elastic Beanstalk - To deploy the Spring Boot application on AWS




