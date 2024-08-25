
import Navigation from "./components/navigation"

export default function DocsLayout( { children }: { children: React.ReactNode }){
    return(
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                
            </header>
            <Navigation></Navigation>
                {children}
        </div>
    )
}