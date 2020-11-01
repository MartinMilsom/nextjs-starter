import { render, screen, waitFor } from "@testing-library/react";
import App from "../pages/index";
import client, { Session } from "next-auth/client";

describe("App", () => {
    it("renders without crashing", () => {
        const mockSession: Session = {
            expires: "1",
            user: { email: "a", name: "Delta", image: "c" },
        };
        client.useSession = jest.fn().mockReturnValueOnce([mockSession, false]);

        render(<App />);

        waitFor(() => {
            expect(
                screen.getByText("Create Next App")
            ).toBeInTheDocument();
        });
    });
});