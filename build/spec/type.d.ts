export declare enum Type {
    Library = "Library",
    ForgeHosted = "ForgeHosted",
    Forge = "Forge",
    Fabric = "Fabric",
    NeoForge = "NeoForge",// เพิ่ม NeoForge
    LiteLoader = "LiteLoader",
    ForgeMod = "ForgeMod",
    FabricMod = "FabricMod",
    NeoForgeMod = "NeoForgeMod",// เพิ่ม NeoForgeMod
    LiteMod = "LiteMod",
    File = "File",
    VersionManifest = "VersionManifest"
}
export interface TypeMetadata {
    id: string;
    defaultExtension?: string;
}
export declare const TypeMetadata: {
    [property: string]: TypeMetadata;
};
