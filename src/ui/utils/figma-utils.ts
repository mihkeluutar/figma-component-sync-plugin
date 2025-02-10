export async function getAllComponentSets(): Promise<ComponentSetNode[]> {
    await figma.loadAllPagesAsync(); // Ensures all pages are accessible

    const allComponentSets = figma.root.findAll(node => node.type === 'COMPONENT_SET') as ComponentSetNode[];
    return allComponentSets;
}