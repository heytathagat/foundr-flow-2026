import { Metadata } from 'next'
import { getSubmissions } from '@/lib/form-storage'
import { Container } from '@/components/site/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatDistanceToNow } from 'date-fns'

export const metadata: Metadata = {
  title: 'Submissions · Admin',
  description: 'View and manage contact form submissions',
}

export default async function SubmissionsPage() {
  const submissions = await getSubmissions()

  return (
    <div className="min-h-screen bg-background">
      <Container className="py-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Contact Form Submissions</h1>
            <p className="text-muted-foreground mt-2">
              Manage and review all contact form submissions
            </p>
          </div>

          <div className="grid gap-4">
            {submissions.length === 0 ? (
              <Card>
                <CardContent className="flex items-center justify-center h-32">
                  <p className="text-muted-foreground">No submissions yet</p>
                </CardContent>
              </Card>
            ) : (
              submissions.map((submission: any) => (
                <Card key={submission.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{submission.name}</CardTitle>
                        <CardDescription>
                          {submission.email}
                          {submission.company && ` • ${submission.company}`}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          submission.status === 'pending' ? 'default' :
                          submission.status === 'reviewed' ? 'secondary' :
                          'outline'
                        }>
                          {submission.status || 'pending'}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(submission.timestamp), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Message:</h4>
                        <p className="text-sm bg-muted p-3 rounded-md">
                          {submission.message}
                        </p>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.open(`mailto:${submission.email}`)}
                        >
                          Reply via Email
                        </Button>
                        <Button 
                          size="sm" 
                          variant="secondary"
                          onClick={() => {
                            navigator.clipboard.writeText(submission.message)
                            alert('Message copied to clipboard')
                          }}
                        >
                          Copy Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
