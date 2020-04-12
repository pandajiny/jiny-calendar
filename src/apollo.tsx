import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import gql from "graphql-tag";
const link = createHttpLink({ uri: "http://localhost:4000/graphql" });

// GQL
export const REQUST_LOGIN = gql`
  mutation requestLogin($email: String, $password: String) {
    requestLogin(email: $email, password: $password) {
      user {
        name
        email
      }
    }
  }
`;

export const REQUST_SIGNUP = gql`
  mutation requestSignup($name: String, $email: String, $password: String) {
    requestSignup(name: $name, email: $email, password: $password) {
      isPassed
      user {
        name
        email
      }
      message
    }
  }
`;

type ScheduleTime = {
  year: number;
  month: number;
  date: number;
};

type ScheduleContent = {
  body: string;
};

type RequestUser = { name: string; email: string };

export type CREATE_SCHEDULE_PROPS = {
  time: ScheduleTime;
  content: ScheduleContent;
  user: RequestUser;
};

export const CREATE_SCHEDULE = gql`
  mutation createSchedule(
    $time: ScheduleTimeInput
    $content: ScheduleContentInput
    $user: RequestUserInput
  ) {
    createSchedule(time: $time, content: $content, user: $user) {
      isPassed
      time {
        year
        month
        date
      }
      user {
        email
      }
      content {
        body
      }
    }
  }
`;

export const GET_ALL_SCHEDULES = gql`
  query getAllSchedules($email: String) {
    getAllSchedules(email: $email) {
      time {
        year
        month
        date
      }
      user {
        email
      }
      content {
        body
      }
    }
  }
`;

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
