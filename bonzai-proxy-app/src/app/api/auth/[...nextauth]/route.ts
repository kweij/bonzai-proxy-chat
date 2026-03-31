import NextAuth, {CallbacksOptions} from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const authOptions = {
  callbacks: {
    async signIn({user, account, profile} : {user: never, account: never, profile: {login: string}}) {
      console.log(user, account, profile, 1)
      return profile.login === 'kweij';
    },
  } as unknown as CallbacksOptions,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
    }),
  ],
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
