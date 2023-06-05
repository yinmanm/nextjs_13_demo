import { NextResponse } from "next/server";
// import { authMiddleware } from "@clerk/nextjs/server";

export default middleware(req => {
  return NextResponse.next();
});

export const config = {
  matcher: ["/", "/sign_in", "/callback"],
};

// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware();

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };