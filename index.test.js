import { decode, translate } from "./index";

describe("Unit Testing for Morse Code Translator", () => {
    it("Should correctly decode morse into numbers and the Latin alphabet", () => {
        expect(
            decode("-- -.-- / -. .- -- . / .. ... / -... --- .-. .- -")
        ).toBe("My nAme is boRat");
        expect(
            decode("my naMe iS jEFf").toBe(
                "-- -.-- / -. .- -- . / .. ... / .--- . ..-. ..-."
            )
        );
        expect(
            decode("1234567890whisKYTangofoxtrot").toBe(
                ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-- .... .. ... -.- -.-- - .- -. --. --- ..-. --- -..- - .-. --- -"
            )
        );
    });
    it("Should correctly translate numbers and the Latin alphabet into morse"),
        () => {
            expect(
                translate("my name is borat").toBe(
                    "-- -.-- / -. .- -- . / .. ... / -... --- .-. .- -"
                )
            );
            expect(
                translate(
                    "-- -.-- / -. .- -- . / .. ... / .--- . ..-. ..-."
                ).toBe("my name is jeff")
            );
            expect(
                translate(
                    ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-- .... .. ... -.- -.-- - .- -. --. --- ..-. --- -..- - .-. --- -"
                ).toBe("1234567890whiskytangofoxtrot")
            );
        };
});
