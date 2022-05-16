import { decode, translate } from "./js/functions";

describe("Unit Testing for Morse Code Translator", () => {
    it("Should correctly decode morse into numbers and the Latin alphabet", () => {
        expect(
            decode("-- -.-- / -. .- -- . / .. ... / -... --- .-. .- -")
        ).toBe("my name is borat");
        expect(decode("-- -.-- / -. .- -- . / .. ... / .--- . ..-. ..-.")).toBe(
            "my name is jeff"
        );
        expect(
            decode(
                ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-- .... .. ... -.- -.-- - .- -. --. --- ..-. --- -..- - .-. --- -"
            )
        ).toBe("1234567890whiskytangofoxtrot");
    });

    it("Should correctly translate numbers and the Latin alphabet into morse", () => {
        expect(translate("mY nAme is BORat")).toBe(
            "-- -.-- / -. .- -- . / .. ... / -... --- .-. .- -"
        );
        expect(translate("my nAme is jEff")).toBe(
            "-- -.-- / -. .- -- . / .. ... / .--- . ..-. ..-."
        );
        expect(translate("1234567890whisKYTangOFoxtrot")).toBe(
            ".---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-- .... .. ... -.- -.-- - .- -. --. --- ..-. --- -..- - .-. --- -"
        );
    });
});
